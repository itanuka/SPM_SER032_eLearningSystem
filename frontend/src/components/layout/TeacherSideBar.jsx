import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import '../style/teacherSideBar.css'

export default function TeacherSideBar() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div >
                <div class="sidebar-wrapper">
                    <nav id="sidebar">
                        <ul class="list-unstyled components">
                            <li>
                                <a href={`/teachers/update/${user.id}`}><i class="fas fa-tachometer-alt"></i> Update Profile</a>
                            </li>

                            <li>

                                <a href={`/teachers/changePassword/${user.id}`}><i class="fa-solid fa-file-circle-plus"></i>Change Password </a>
                            </li>


                            <li>
                                {/* <a href="#"><i class="fas fa-clipboard-list"></i> Templates</a> */}
                                <a href=''><i class="fa-solid fa-file-circle-plus"></i>xxxxx </a>
                            </li>

                            {/* <li>
                                <a href="/addAdmin"><i class="fas fa-plus"></i> Add New Admin</a>
                            </li> */}

                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
