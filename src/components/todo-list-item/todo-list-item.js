import React, {Component} from 'react';

import './todo-list-item.css'

export default class TodoListItem extends Component {

    /* //V1: ф-я создаётся не на прототипе класса, а на самом объекте -> this будет не undefined
    constructor() {
        super();
        this.onLabelClick = () => {
            alert(`Good job! Done ${this.props.label}`)
        }
    } */

    // V2: ещё можно так: ф-я создаётся на самом объекте (не на пртотипе), ф-я-стрелка сохраняет значение this
    onLabelClick = () => { //т.е. ф-я создаётся не на прототипе класса, а на самом объекте -> this будет не undefined
        this.setState(({done}) =>{//тригерит ререндеринг компонента
            return {
                done: !done
            }
        });
    }

    onMarkImportant = () => {
        this.setState(({important}) => { //с такой конструкцией state будет в финальномм сост-и и его можно будет изменять (привет, синхронность)
            return {
                important: !important //если state был бы полностью независим, то можно был бы сделать => important: true
            }
        });
    }

    state = { //P.S. устанавливать state таким образом можно только 1 раз
        done: false,
        important: false
    }

    render() {

        const {label} = this.props
        const {done, important} = this.state

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={this.onLabelClick}>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>
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