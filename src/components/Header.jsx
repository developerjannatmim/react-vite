import React, { useState } from 'react';

const Header = (props) => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    key1: 'value 1',
    key2: 'value 2',
    key3: 'value 3',
  });

  const Change = () => {
    setObj((prevObj) => ({
      ...prevObj,
      key1: 'new value 1',
      key2: 'new value 2',
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCount(count + 1);
  }

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveItem = (i) => {
    list.splice(i, 1);
    setItem([...list]);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      <div>
        <h1>Number: {count}</h1>
        <button onClick={handleChange}>click</button>
      </div>
      <div>
        <h1>{obj.key1}</h1>
        <h1>{obj.key2}</h1>
        <button onClick={Change}>click</button>
      </div>
      <div>
        <table>
          <tbody>
            {list.length !== 0 ? (
              list.map((element, i) => {
                return (
                  <tr>
                    <td>{element}</td>
                    <td>
                    <button onClick={()=>{
                      RemoveItem(i)
                    }}>remove</button>
                    </td>
                  </tr>
                )

              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        <input
          type="text"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button onClick={AddToList}>submit</button>
      </div>
    </div>
  );
};

export default Header;
