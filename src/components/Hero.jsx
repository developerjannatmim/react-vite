import React, { useRef } from 'react';

const Hero = (props) => {
  const marks = 90; //conditional rendering

  const city = ['dhaka', 'jeshore', 'kolkata', 'khulna'];

  const LoginBtnStatus = (status) => {
    if (status) {
      return <button>logout</button>;
    } else {
      return <button>login</button>;
    }
  };

  const status = false;
  const isLoggedIn = true;

  // switch(status){
  //   case true:
  //   return <button>logout</button>
  //   case false:
  //   return <button>login</button>
  //   default:
  //   return null
  // }

  // function Demo() {
  //   alert('hello')
  // }

  const Demo = () => {
    alert('demo is ready');
  };

  const PostForm = (e) => {
    e.preventDefault();
    alert('form submitted');
  };

const Item = useRef();
  const demoRef = useRef(null);

  const Change = () => {
    Item.current.innerHTML = "<h1>hello</h1>";
  }

  const handleChange = () => {
    demoRef.current.src ='https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';
    demoRef.current.setAttribute('height', '200px')
    demoRef.current.setAttribute('weidth', '200px')
  };

  let firstName,lastName = useRef();

  const elemChange = () => {
    let fName = firstName.value
    let lName = lastName.value
    alert(`${fName}-${lName}`)
  }

  let demoList = useRef();

  const textAdd = () => {
    demoList.classList.add("text-primary")
    demoList.classList.remove("text-success")
  }

  let number = useRef(0);
  const changeNumber = () => {
    number.current++;
    console.log(number.current);
  }

  let APIData = useRef(null);
  let myText = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    APIData.current= await response.json()
  }

  const showData = () => {
    myText.current.innerText= JSON.stringify(APIData.current)
  }
  return (
    <div>
      <div>
        <p ref={myText}></p>
        <button onClick={fetchData}>Call API</button>
        <button onClick={showData}>Show Data</button>
      </div>
      <div>
        <button onClick={changeNumber}>click</button>
      </div>
      <div>
        <h1 className="text-success" ref={(a)=>demoList=a}>Hello</h1>
        <button onClick={()=>textAdd()}>change text color</button>
      </div>
      <div>
        <input type="text" placeholder="first name" ref={(a)=>firstName=a}/>
        <input type="text" placeholder="last name" ref={(a)=>lastName=a}/>
        <button onClick={elemChange}>submit</button>
      </div>
      <div>
        <img
          ref={demoRef}
          height="200"
          weidth="200"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC"
          alt="iamge"
        ></img>
        <button onClick={handleChange}>Click</button>
      </div>
      <div>
        <p ref={Item}></p>
        <button onClick={() => Change()}>me</button>
        <form onSubmit={PostForm}>
          <input type="text" placeholder="name" />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        <button onClick={Demo}>Click</button>
        <button onClick={props.btn}>Submit</button>
      </div>
      <div>
        <ul>
          <li>Name: {props.item['name']}</li>
          <li>Age: {props.item['age']}</li>
          <li>City: {props.item['city']}</li>
        </ul>
      </div>
      <img
        src={
          'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='
        }
      />

      <div>
        {
          //inline if else...
          marks > 80 ? <p>Good</p> : <p>average</p>
        }
      </div>

      <div>
        {(() => {
          //immediately invoked function...
          if (marks > 80 && marks < 100) {
            return <h1>A+</h1>;
          } else if (marks > 70 && marks < 80) {
            return <h1>A</h1>;
          } else if (marks > 60 && marks < 70) {
            return <h1>A-</h1>;
          } else if (marks > 50 && marks < 60) {
            return <h1>B</h1>;
          } else {
            return <h1>F</h1>;
          }
        })()}
      </div>

      <div>
        <ul>
          {city.map((item, i) => {
            //mapping
            return <li key={i.toString()}>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <h1>Login Status</h1>
        {LoginBtnStatus(true)}
      </div>

      <div>
        {
          //ternary operator
          status ? <button>logout</button> : <button>login</button>
        }
      </div>
      <div>
        <h1>Login Status</h1>
        {
          //logical &&
          isLoggedIn && <button>logout</button>
        }
      </div>
      <div>
        {(() => {
          if (status === false) {
            return <button>logout</button>;
          } else {
            return <button>login</button>;
          }
        })()}
      </div>
    </div>
  );
};

export default Hero;
