import React, { useEffect, useState } from 'react';
import './index.scss';
import MdEdit from 'components/md-edit';

const AdminContent = () => {
    return (
        <div className="admin-content">
            <div className="edit-wrapper">
                <MdEdit />
            </div>
        </div>
    );
};

export default AdminContent;
