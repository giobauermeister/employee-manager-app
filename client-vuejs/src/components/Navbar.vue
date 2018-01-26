<template>
  <nav>
    <div class="nav-wrapper light-blue darken-1">
      <div class="" style="padding-left:25px; padding-top:5px; margin-right:100px" align="left">
        <img src="../assets/logo-ff.png" height="50px" alt="">
        <router-link to="/" class="brand-logo">
          <div style="padding-left:25px;">Employee Manager PiClock</div>
        </router-link>
        <ul class="right">
          <li>
            <router-link to="/timesheets">
              <a class="waves-effect waves-light btn grey z-depth-4"><i class="material-icons left">access_time</i>Timesheets</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


