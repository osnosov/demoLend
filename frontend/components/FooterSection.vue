<template>
  <footer id="footer" class="section bg-dark footer-text-light">
    <div class="container">
      <ul class="social-icons justify-content-center mb-3">
        <li class="social-icons-twitter">
          <a href="https://twitter.com/" target="_blank" title="twitter">
            <twitter />
          </a>
        </li>
        <li class="social-icons-facebook">
          <a href="http://www.facebook.com/" target="_blank" title="facebook">
            <facebook />
          </a>
        </li>
        <li class="social-icons-linkedin">
          <a href="http://www.linkedin.com/" target="_blank" title="linkedin">
            <linkedin />
          </a>
        </li>
        <li class="social-icons-github">
          <a href="http://www.github.com/" target="_blank" title="github">
            <github />
          </a>
        </li>
      </ul>
      <p class="text-muted text-center">Copyright © 2020</p>
    </div>
  </footer>
</template>

<script>
import twitter from '@/assets/icons/twitter.svg?inline'
import facebook from '@/assets/icons/facebook.svg?inline'
import linkedin from '@/assets/icons/linkedin.svg?inline'
import github from '@/assets/icons/github.svg?inline'

export default {
  name: 'Footer',
  components: {
    twitter,
    facebook,
    linkedin,
    github,
  },
}
</script>

<style lang="scss" scoped>
#footer {
  background: #fff;
  color: #252b33;
  padding: 66px 0;
  padding: 4.125rem 0;
  & > .footer-text-light {
    color: rgba(250, 250, 250, 0.8);
  }
}
.social-icons {
  margin: 0;
  padding: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  line-height: inherit;
  & > li {
    margin: 0 6px 4px;
    padding: 0;
    overflow: visible;
    line-height: inherit;
    & > a {
      width: 34px;
      height: 34px;
      line-height: 34px;
      font-size: 22px;
      color: #aab1b8;
      & > svg {
        line-height: inherit;
      }
    }
    & > .social-icons-muted li a {
      color: #aab1b8;
    }
    &:hover {
      & > .social-icons-twitter a {
        color: #00acee;
      }
      & > .social-icons-facebook a {
        color: #3b5998;
      }
      & > .social-icons-linkedin a {
        color: #0e76a8;
      }
      & > .social-icons-github a {
        color: #333;
      }
    }
  }
}
</style>
