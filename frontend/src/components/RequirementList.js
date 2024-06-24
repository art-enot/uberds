import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import api from '../services/api';


const RequirementList = () => {
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        api.get('requirements/')
            .then(response => {
                setRequirements(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the requirements!", error);
            });
    }, []);

    return (
<div>
<Helmet>
                <title>Уберизация ДС - Общие требования</title>
            </Helmet>
            <h1>Общие требования</h1>
            <ul>
                {requirements.map(requirement => (
                    <li key={requirement.id}>
                        <h2>{requirement.title}</h2>
                        <p>{requirement.description}</p>
                        {requirement.files && requirement.files.length > 0 && (
                            <ul>
                                {requirement.files.map(file => (
                                    <li key={file.id}>
                                        <a href={file.file} target="_blank" rel="noopener noreferrer">
                                            {file.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequirementList;