import React, {Component} from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: '' //initial state value
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value //достаём текущее значение поля
        });
    }

    onSubmit = (e) => {
        e.preventDefault();//отменяет дефолтную отправку данных на сервер и перезагрузку страницы
        this.props.onItemAdded(this.state.label);
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                 onSubmit={this.onSubmit}>

                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange} //получаем текущее значение инпута
                       placeholder="What needs to be done"
                />
                <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }
}