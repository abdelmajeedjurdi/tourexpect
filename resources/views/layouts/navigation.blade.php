    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl bg-dark " id="navbarBlur"
        navbar-scroll="true">
        <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
                <h6 class="font-weight-bolder mb-0">Dashboard</h6>
            </nav>
            <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">

                <ul class="navbar-nav  justify-content-end ms-auto">

                    <li class="nav-item dropdown">
                        @if (Auth::user())
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user me-sm-1"></i>
                                <span class="d-sm-inline d-none">{{ Auth::user()->name }}</span>
                            </a>
                        @endif
                        @if (!Auth::user())
                            <a style="text-decoration: none !important;" href="{{ route('login') }}"
                                class="text-sm text-gray-200 dark:text-gray-500 underline">Log in</a>
                            <a style="text-decoration: none !important;" href="{{ route('register') }}"
                                class="ml-4 text-sm text-gray-200 dark:text-gray-500 underline">Register</a>
                        @endif
                        <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#">{{ __('Profile') }}</a>
                            </li>

                            <li>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                                         document.getElementById('logout-form').submit()">
                                    {{ __('Logout') }}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                    class="d-none">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <span id="lang"
                            class="ml-4 px-2 py-1 rounded text-sm text-gray-200 dark:text-gray-500 cursor-pointer border"
                            onclick="changeLang()"> Arabic </span>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
