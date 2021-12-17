import React from "react";
import "../styles/Form.css";

export default function Form (props) {
    const { form, change, disabled, submit, errors } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return (
        <div className="container">
            <div className="sideImg"></div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label className= "inputName">Name</label>
                <input 
                id="name-input" name="name" type="text" placeholder="Type Your Name Here"
                value={form.name} onChange={onChange}
                ></input>
                <span>{errors.name}</span>

                <label className= "inputName">Size</label>
                <select name="size" value={form.size} id="size-dropdown" onChange={onChange}>
                    <option>Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>

                <div className="toppings">
                    <label>Pepperoni</label>
                    <input 
                    className= "checkboxes" name="pepperoni" 
                    type="checkbox" checked={form.pepperoni} 
                    onChange={onChange}
                    ></input>

                    <label>Sausage</label>
                    <input 
                    className= "checkboxes" name="sausage" 
                    type="checkbox" checked={form.sausage} 
                    onChange={onChange}
                    ></input>

                    <label>Bacon</label>
                    <input className= "checkboxes" name="bacon" 
                    type="checkbox" checked={form.bacon} 
                    onChange={onChange}
                    ></input>

                    <label>Mushroom</label>
                    <input className= "checkboxes" name="mushroom" 
                    type="checkbox" checked={form.mushroom}
                    onChange={onChange}
                    ></input>
                </div>
                    <label className= "inputName">Special Instructions</label>
                    <textarea id="special-text" onChange={onChange}></textarea>

                    <button id="order-button" disabled={disabled}>Add to Order</button>
            </form>
        </div>
    )
}