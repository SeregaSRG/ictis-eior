<template>
  <div class="profile">
    <div class="summary">
      <div class="profile__title">
        ПРОФИЛЬ
        <div class="profile__edit" @click="openPopup('change')">
          изменить
        </div>
      </div>
      <div class="profile__avatar">
        <img src="https://pbs.twimg.com/media/D5f_bs_UIAANqHk?format=jpg&name=small" class="profile__image">
      </div>
      <div class="profile__name">{{ user.name }}</div>
      <div class="profile__contacts">
        <div class="profile__contacts-container">
          <div class="profile__contact">
            <div class="profile__contact-icon"><img src="../assets/profile/menu/phone.png" class=""></div>
            <div class="profile__contact-value">{{ user.phone }}</div>
          </div>
          <div class="profile__contact">
            <div class="profile__contact-icon"><img src="../assets/profile/menu/mail.png" class=""></div>
            <div class="profile__contact-value">{{ user.email }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile__menu">
      <div class="menu__item">
        <div class="menu__icon">
          <img src="../assets/profile/menu/support.png" class="menu__image">
        </div>
        <div class="menu__label">
          Справка
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__icon">
          <img src="../assets/profile/menu/company.png" class="menu__image menu__image_settings">
        </div>
        <div class="menu__label">
          О компании
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__icon">
          <img src="../assets/profile/menu/settings.png" class="menu__image menu__image_settings">
        </div>
        <div class="menu__label">
          Настройки
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__icon">
          <img src="../assets/profile/menu/logout.png" class="menu__image menu__image_logout">
        </div>
        <div class="menu__label menu__label_exit">
          Выход
        </div>
      </div>
    </div>
    <change
      :name=user.name
      :phone=user.phone
      :email=user.email
    ></change>
  </div>
</template>

<script>
import change from '../components/Profile/change-profile'
export default {
  name: 'Main',
  components: {
    change
  },
  data () {
    return {
      user: {
        name: 'Sergei J',
        phone: '+7 925 256-74-23',
        email: 'grebenyuk@microfox.ru'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .profile {
    font-family: "Geometria", sans-serif;
    font-weight: 300;
    height: 100%;

    .summary {
      font-family: Geometria, sans-serif;
      width: 100%;
      background: #F3F6FA;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 45px 45px;
      padding-bottom: 55px;
      padding-top: 32px;

      .profile__title {
        width: 100%;
        padding: 0 25px 0 25px;
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
        color: #000000;
        text-align: center;
        position: relative;
        height: 25px;
        box-sizing: border-box;

        .profile__edit {
          position: absolute;
          right: 25px;
          height: 100%;
          font-weight: 300;
          color: #8188A6;
          font-size: 16px;
          line-height: 16px;
          top: 0;
          display: flex;
          align-items: center;
        }
      }

      .profile__avatar {
        margin-top: 16px;
        display: flex;
        justify-content: center;

        .profile__image {
          width: 68px;
          height: 68px;
          object-fit: cover;
          border-radius: 22px;
        }
      }

      .profile__name {
        font-size: 20px;
        line-height: 25px;
        color: #000000;
        text-align: center;
        margin-top: 11px;
        font-weight: 500;
      }

      .profile__contacts {
        margin: 32px auto 0 auto;
        display: flex;
        justify-content: center;

        .profile__contacts-container {
          display: flex;
          align-items: baseline;
          flex-direction: column;

          .profile__contact {
            margin-top: 16px;
            display: flex;
            align-items: center;

            .profile__contact-icon {
              width: 25px;
              height: 25px;
              margin-right: 15px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            &:first-child {
              margin-top: 0;
            }

            .profile__contact-value {
              font-size: 16px;
              line-height: 20px;
              color: #8188A6;
              font-weight: 500;
            }
          }
        }
      }
    }

    .profile__menu {
      width: 100%;
      padding: 0 30px;
      margin-top: 42px;

      .menu__item {
        display: flex;
        height: 36px;
        margin-top: 16px;

        &:first-child {
          margin-top: 0;
        }

        .menu__icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;

          .menu__image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;

            &.menu__image_settings {
              width: 28px;
            }

            &.menu__image_logout {
              width: 28px;
            }
          }
        }

        .menu__label {
          margin-left: 7px;
          font-size: 20px;
          line-height: 25px;
          color: rgba(28, 39, 92, 0.8);
          font-weight: 500;
          display: flex;
          align-items: center;

          &.menu__label_exit {
            color: #D12345;
          }
        }
      }
    }
  }
</style>
