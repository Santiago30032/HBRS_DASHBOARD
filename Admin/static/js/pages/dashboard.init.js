  let radialChartGenders = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [40, 60],
    plotOptions: {
      radialBar: {
        dataLabels: {

        }
      }
    },
    labels: ['Hombres', 'Mujeres']
  };
  
  new ApexCharts(document.querySelector("#radial_chart-gen"), radialChartGenders).render();

  let radialChartAges = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [20, 20,20,20,20],
    plotOptions: {
      radialBar: {
        dataLabels: {

        }
      }
    },
    labels: ['(0-4)', '(4-6)','(8-12)','(15-20)', '(25-32)', '(32-60)']
  };
  
  new ApexCharts(document.querySelector("#radial_chart-age"), radialChartAges).render();  
  let radialChartEmotions = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [30, 30, 10, 5],
    plotOptions: {
      radialBar: {
        dataLabels: {

        }
      }
    },
    labels: ['Enojo', 'Miedo','Felicidad','Tristeza', 'Neutral']
  };
  
  new ApexCharts(document.querySelector("#radial_chart-emo"), radialChartEmotions).render();


  let genderXAge= {
    series: [{
    name: 'Hombre',
    data: [44, 55, 57, 56, 61, 58]
  }, {
    name: 'Mujer',
    data: [76, 85, 101, 98, 87, 105]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '100%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['(0-4)', '(4-6)','(8-12)','(15-20)', '(25-32)', '(32-60)'],
  },
  yaxis: {
    title: {
      text: 'Cantidad'
    }
  },
  fill: {
    opacity: 1
  },
  
  };

new ApexCharts(document.querySelector("#barAgexGender"), genderXAge).render()
let emotionXGender= {
    series: [{
    name: 'Hombre',
    data: [44, 55, 57, 56, 61]
  }, {
    name: 'Mujer',
    data: [76, 85, 101, 98, 87]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '100%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Enojo', 'Miedo','Felicidad','Tristeza', 'Neutral'],
  },
  yaxis: {
    title: {
      text: 'Cantidad'
    }
  },
  fill: {
    opacity: 1
  },
  
  };

new ApexCharts(document.querySelector("#barEmotionxGender"), emotionXGender).render()
let emotionXAges= {
    series: [{
    name: '(0-4)', 
    data: [44, 55, 57, 56, 61]
  }, {
    name: '(4-6)',
    data: [76, 85, 101, 98, 87]
  },
  {
    name: '(8-12)',
    data: [76, 85, 101, 98, 87]
  },{
    name: '(15-20)', 
    data: [76, 85, 101, 98, 87]
  },{
    name: '(25-32)',
    data: [76, 85, 101, 98, 87]
  },
  {
    name: '(32-60)',
    data: [76, 85, 101, 98, 87]
  }


],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '100%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Enojo', 'Miedo','Felicidad','Tristeza', 'Neutral'],
  },
  yaxis: {
    title: {
      text: 'Cantidad'
    }
  },
  fill: {
    opacity: 1
  },
  
  };

new ApexCharts(document.querySelector("#EmotionsXAges"), emotionXAges).render()

