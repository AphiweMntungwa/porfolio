import React from "react";

const List = ({ styleprop }) => {
  const { list, title } = styleprop;
  return (
    <>
      <h4 className='name'>{title}</h4>
      <ul className='interests'>
        {list.map((el) => (
          <li key={el.id}>{el.int}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
