<script lang="ts">
  import Icon from '../UI/Icon.svelte'
  import WhiteSpace from '../UI/WhiteSpace.svelte'
</script>

<style>
  .container {
    background-color: red;
    min-height: 144px;
    width: 100%;
    text-align: center;
    color: black;
  }
  .contactText {
    font-size: 2rem;
    transform: rotate(0.03deg);
  }
  .icons {
    display: flex;
    color: black;
    justify-content: center;
  }
  .twitter {
    margin: 0 24px;
  }
  .gmail {
    cursor: pointer;
    position: relative;
    width: 48px;
    height: 48px;
  }
  .mailPop {
    opacity: 0;
    width: 216px;
    height: 48px;
    border-radius: 16px;
    transform: rotate(0.03deg);
    font-size: 1.2rem;
    user-select: all;
    position: absolute;
    top: 0;
    transform: translateX(-84px) translateY(-100%);
    background-color: white;
    transition: opacity 0.5s;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gmail:hover .mailPop {
    opacity: 1;
  }
  .mailPop:before {
    content: "";
    position: absolute;
    top: 48px;
    left: 50%;
    margin-left: -15px;
    border: 15px solid transparent;
    border-top: 15px solid white;
  }
</style>

<WhiteSpace />

<div class="container">
  <h2 class="contactText">contact</h2>
  <div class="icons">
    <a href="https://github.com/ryoha000" target="_blank" rel="noopener noreferrer">
      <Icon name="github" size="{48}" />
    </a>
    <a class="twitter" href="https://twitter.com/ryoha000" target="_blank" rel="noopener noreferrer">
      <Icon name="twitter" size="{48}" />
    </a>
    <div class="gmail">
      <Icon name="gmail" size="{48}" />
      <div class="mailPop">ryoha000☆gmail.com</div>
    </div>
  </div>
</div>
