import React, { useState } from 'react';
import Children_Comp from './Children_Comp';

const Parent_Comp: React.FC = () => {
  const [parentName, setParentName] = useState<string>('Nguyễn Văn Nam');

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Họ và tên bên component cha: {parentName}</p>
      <Children_Comp name="Nguyễn Thị Hương" />
    </div>
  );
}

export default Parent_Comp;
