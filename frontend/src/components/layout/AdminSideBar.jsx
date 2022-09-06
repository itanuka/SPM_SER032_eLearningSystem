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
                                <a href=""><i class="fas fa-tachometer-alt"></i> xxxxxx</a>
                            </li>

                            <li>
                                <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                                    class=" fas fa-users"></i> xxxx</a>
                                <ul class="collapse list-unstyled" id="productSubmenu">
                                    <li>
                                        <a href=""><i class="fa-solid fa-user"></i> xxxxx</a>
                                    </li>

                                    <li>

                                        <a href=""><i class="fa-solid fa-user-graduate"></i> xxxxx</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href=""><i class="fa-solid fa-users-rectangle"></i> xxxxx</a>
                            </li>

                            <li>
                                <a href=""><i class="fas fa-clipboard-list"></i> xxxxxx</a>
                            </li>



                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
