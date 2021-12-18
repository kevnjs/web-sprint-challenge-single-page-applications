import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import schema from "./validation/schema";
import * as yup from 'yup';


const initialForm = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  mushroom: false,
  special: "",
}
const initialErrors = {
  name: "",
  size: "",
  pepperoni: "",
  sausage: "",
  bacon: "",
  mushroom: "",
  special: "",
}
const initialDisabled = true;
// const initialOrders= [];

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValue, setFormValue] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] =useState(initialDisabled);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValue({...formValue,[name]: value})
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValue.name.trim(),
      size: formValue.size.trim(),
      pepperoni: formValue.pepperoni,
      sausage: formValue.sausage,
      bacon: formValue.bacon,
      mushroom: formValue.mushroom,
      special: formValue.special
    }
    setOrders([newOrder, ...orders]);
    setFormValue(initialForm);
  }

  useEffect( () => {
    schema.isValid(formValue).then(valid => setDisabled(!valid))
  }, [formValue])

  return (

    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pizza">
            <Form form={formValue} order={orders} change={inputChange} disabled={disabled} submit={formSubmit} errors={errors}/>
          </Route>
        </Switch>
    </Router>
  );
};
export default App;
