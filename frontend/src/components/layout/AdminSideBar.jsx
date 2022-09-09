import React from 'react'

import '../style/adminSideBar.css'

export default function adminSideBar() {


    return (
        <div>

            <div >
                <div class="sidebar-wrapper">
                    <nav id="sidebar">
                        <ul class="list-unstyled components">
                            <li>
                                <a href="/adminHome"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
                            </li>

                            <li>
                                <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                                    class=" fas fa-users"></i> Users</a>
                                <ul class="collapse list-unstyled" id="productSubmenu">
                                    <li>
                                        <a href=""><i class="fa-solid fa-user"></i> Teachers</a>
                                    </li>

                                    <li>

                                        <a href=""><i class="fa-solid fa-user-graduate"></i> Students</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="/library/addBook"><i class="fa-solid fa-plus"></i> Add book</a>
                            </li>
                            <li>
                                <a href="/library/viewAllBooks"><i class="fa-solid fa-book"></i> All Books</a>
                            </li>

                            <li>
                                <a href=""><i class="fas fa-clipboard-list"></i> Reports</a>
                            </li>



                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
