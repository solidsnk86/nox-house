(async() => {
    const response = await fetch("https://api.olaclick.app/ms-products/public/companies/7bae7c21-d1ea-4fa7-b942-365eb907de34/categories")
    const allData = await response.json();
    console.log(allData.data)
})()