import PatientCMS from 'patient/Patient';
import Menu from 'atomicLibrary/Menu';
import { useState } from 'react';

const Patient = () => {
  const [activeItem, setActiveItem] = useState('search');

  const items = [
    {
      label: 'Patients',
      isHeader: true, // This will render as header text
    },
    {
      label: 'Patient Search',
      isActive: activeItem === 'search',
      onClick: () => setActiveItem('search'),
    },
    {
      label: 'Add Patient',
      isActive: activeItem === 'add',
      onClick: () => setActiveItem('add'),
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <Menu items={items} />
      </div>
      <div className="col-span-10">
        <PatientCMS />
      </div>
    </div>
  );
};

export default Patient;
