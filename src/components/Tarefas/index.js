import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({tarefas, handleDelete, handleEdit}){
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa} >{tarefa}
                    <spam>
                        <FaEdit className="edit"
                            onClick={ (e) => handleEdit(e,index)}/>

                        <FaWindowClose className="delete"
                            onClick={ (e) => handleDelete(e,index)} />
                    </spam>
                </li>

            ))}
        </ul>
    );
}

Tarefas.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefa: PropTypes.array.isRequired
}
