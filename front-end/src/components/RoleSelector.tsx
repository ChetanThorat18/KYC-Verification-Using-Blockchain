import React from 'react';

interface RoleSelectorProps {
  currentRole: string | null;
  onRoleChange: (role: string) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ currentRole, onRoleChange }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '10px',
      borderRadius: '5px',
      zIndex: 1000,
      border: '1px solid #ccc'
    }}>
      <h4>Testing: Override Role</h4>
      <p>Current role: {currentRole || 'unknown'}</p>
      <div>
        <button 
          onClick={() => onRoleChange('admin')}
          style={{ margin: '5px', background: currentRole === 'admin' ? '#4CAF50' : '' }}
        >
          Admin
        </button>
        <button 
          onClick={() => onRoleChange('bank')}
          style={{ margin: '5px', background: currentRole === 'bank' ? '#4CAF50' : '' }}
        >
          Bank/FI
        </button>
        <button 
          onClick={() => onRoleChange('customer')}
          style={{ margin: '5px', background: currentRole === 'customer' ? '#4CAF50' : '' }}
        >
          Customer
        </button>
      </div>
      <p style={{ fontSize: '10px' }}>*For testing only</p>
    </div>
  );
};

export default RoleSelector; 