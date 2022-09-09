import React from 'react'
import '../style/userSideBar.css'

export default function UserSideBar() {
    return (
        <div>
            <div >
                <div class="sidebar-wrapper">
                    <nav id="sidebar">
                        <ul class="list-unstyled components">
                            <li>
                                <a href="/studentHome"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
                            </li>

                            <li>
                                <a href="/studentHome"><i class="fa-sharp fa-solid fa-book-open-reader"></i> My Courses</a>
                            </li>
                            
                            <li>
                                <a href="/library/UserviewAllBooks"><i class="fa-solid fa-book"></i> Library</a>
                            </li>

                            <li>
                                
                                <a href=''><i class="fa-solid fa-file-circle-plus"></i> My Profile</a>
                            </li>


                            <li>
                                {/* <a href="#"><i class="fas fa-clipboard-list"></i> Templates</a> */}
                                <a href=''><i class="fa-solid fa-file-circle-plus"></i> Change Password </a>
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
