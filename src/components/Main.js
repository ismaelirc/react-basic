import React, { Component } from 'react';
import './Main.css'

//Form
import { FaPlus } from 'react-icons/fa';

//tarefas
import { FaEdit } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas:[],
        index: -1
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { tarefas, index } = this.state;
        let { novaTarefa }  = this.state;

        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) != -1) return;

        const novasTarefas = [...tarefas];

        if(index == -1){
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            })
        }else{

            novasTarefas[index] = novaTarefa

            this.setState({
                tarefas: [...novasTarefas],
                index: -1
            })

        }

    }

    handleEdit = (event, index) => {

        const { tarefas } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index]
        })

    }

    handleDelete = (event, index) => {

        const { tarefas } = this.state;

        const novasTarefas = [...tarefas];

        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas]
        })

    }

    handleChange = (event) => {
        this.setState({
            novaTarefa: event.target.value
        })
    }


    render() {
        const { novaTarefa, tarefas } = this.state;

        return(
            <div className="main">
                <h1>Lista de tarefas { novaTarefa }</h1>
                <form action="#" onSubmit={this.handleSubmit} className="form">
                    <input
                        onChange={this.handleChange} type="text"
                        value={ novaTarefa }
                        />
                    <button type="submit">
                        <FaPlus/>
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa} >{tarefa}
                            <spam>
                                <FaEdit className="edit"
                                        onClick={ (e) => this.handleEdit(e,index)}/>

                                <FaWindowClose className="delete"
                                                onClick={ (e) => this.handleDelete(e,index)} />
                            </spam>
                        </li>

                    ))}
                </ul>

            </div>
        );
    }
}
