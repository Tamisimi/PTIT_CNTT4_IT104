import React from 'react';

type Props = {
    name: string;
};

const Children_Comp: React.FC<Props> = ({ name }) => {
    return (
        <div>
            <h2>Họ và tên bên component con: {name}</h2>
        </div>
    );
};

export default Children_Comp;