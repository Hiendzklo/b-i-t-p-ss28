import React from 'react';

interface Props {
  name: string;
}

const Children_Comp: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h3>Họ và tên bên component con</h3>
      <p>Họ và tên bên component con: {name}</p>
    </div>
  );
}

export default Children_Comp;
