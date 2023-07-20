import React from "react";
const List = (props) => {
  const { items, textProperty, valueProperty, onListChange, currentList } =
    props;
  return (
    <div className=" border-t border-gray-200 rounded ">
      {items.map((item) => (
        <ul key={item[valueProperty]} className="">
          <li
            onClick={() => onListChange(item)}
            className={`${
              currentList === item
                ? "bg-blue-500 text-white hover:bg-blue-500"
                : "hover:bg-gray-200"
            } cursor-pointer rounded py-5 px-20 flex items-center text-xl font-semibold text-gray-900  border border-gray-200 p-5`}
          >
            {item[textProperty]}
          </li>
        </ul>
      ))}
    </div>
  );
};
List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default List;
