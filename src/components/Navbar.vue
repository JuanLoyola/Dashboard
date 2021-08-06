<template>
  <div id="nav">
      <div>
        <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
      </ul>
    </div>
    <Menu as="div" class="mr-10 relative">
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-10 w-10 rounded-full" src="@/assets/profile.png" alt="profile" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  name: 'Navbar',
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  }
}
</script>

<style lang="scss">
#nav {
  display: flex;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position:sticky;
  top:0;
  z-index:3;
  background: #2b2e3c;

  .menu{
    margin-right: 30px;
  }
}
#nav ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  #nav ul li{
    margin: 0 2px;
  }
  #nav ul li a{
    color: #d1d5d6;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 1rem;
    border-radius: 5px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }
  #nav ul li a:hover {
    color:#e2e6e7;
    background: rgba(255, 255, 255, 0.1);
  }
  #nav .menu-btn i{
    color: #fff;
    font-size: 22px;
    padding: 0 30px;
    cursor: pointer;
    display: none;
  }

  input[type="checkbox"] {
    display: none;
  }
  @media (max-width: 1000px){
    #nav{
      height: 88px;
      padding: 0 40px 0 50px;
      background: #2b2e3c;
    }
  }
  @media (max-width: 920px) {
    #nav .menu-btn i{
      display: block;
    }
    #click:checked ~ .menu-btn i:before{
      content: "\f00d";
    }
    #nav ul{
      position: fixed;
      top: 80px;
      left: -100%;
      background: #1f2937f1;
      height: 100vh;
      width: 100%;
      text-align: center;
      display: block;
      transition: all 0.3s ease;
    }
    #click:checked ~ ul{
      left: 0;
    }
    #nav ul li{
      width: 100%;
      margin: 40px 0;
    }
    #nav ul li a{
      width: 100%;
      margin-left: -100%;
      display: block;
      font-size: 20px;
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    #click:checked ~ ul li a{
      margin-left: 0px;
    }
    #nav ul li a.active,
    #nav ul li a:hover{
      background: none;
      color: #d1d5d6;
      background: rgba(255, 255, 255, 0.1);
    }
  }
  @media screen and (min-width: 320px) and (max-width:1034px){
    #nav{
      padding: 0px 0px;
      display:flex;
      width:100%;

      .name{
        font-size: 0.8rem;
      }

      a{
        font-size: 0.6rem;
        display:flex;
        flex-direction: row wrap;
      }
    }
  }
</style>
