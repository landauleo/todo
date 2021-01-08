import React, {Component} from 'react';

import './todo-list-item.css'

export default class TodoListItem extends Component {

    constructor() {
        super();

        this.onLabelClick = () => { //т.е. ф-я создаётся не на прототипе класса, а на самом объекте -> this будет не undefined
            alert(`Good job! Done ${this.props.label}`)
        }
    }

    /* ещё можно так: ф-я создаётся на самом объекте (не на пртотипе), ф-я-стрелка сохраняет значение this
    onLabelClick = () => { //т.е. ф-я создаётся не на прототипе класса, а на самом объекте -> this будет не undefined
        alert(`Good job! Done ${this.props.label}`)
    }
     */

    render() {

        const {label, important = false} = this.props

        const style = {
            color: important ? "tomato" : "pink",
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}
                onClick={this.onLabelClick}>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
    }
}