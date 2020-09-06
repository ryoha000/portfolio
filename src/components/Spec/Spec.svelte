<script lang="ts">
  import HeaderLabel from '../UI/HeaderLabel.svelte'
  import SpecContent from './SpecContent.svelte'

  const data: { label: string, value: string }[] = [
    {
      label: 'タイトル',
      value: 'りょはインフィニティ'
    },
    {
      label: 'ブランド',
      value: 'りょは.moe'
    },
    {
      label: 'ジャンル',
      value: '無限のりょはに囲まれて余生を過ごすぶっ飛び恋愛ADV',
    },
    {
      label: '発売日',
      value: '2030年1月1日',
    },
    {
      label: '対応OS',
      value: 'Windows10 Pro',
    },
    {
      label: '対応言語',
      value: 'TypeScript(JavaScript), Rust, Go, C#, Python',
    }
  ]
</script>

<HeaderLabel label="Spec" />

<div class="container">
  {#each data as {label, value}}
    <SpecContent {label} {value} />
  {/each}
</div>
