<script>
    import '$lib/styles/app.css'
    import '$lib/styles/fonts.css'
</script>


<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="author" content="OhMyChart.com" />
	<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" /> -->
</svelte:head>

<div class="site-container">
    <slot />
</div>


<style>
    .site-container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
</style>