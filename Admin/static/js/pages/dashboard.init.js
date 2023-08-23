function countWomen(data) {
  const womenData = data.filter((item) => item.genero === "Mujer");
  const womenCount = womenData.length;
  return womenCount;
}
function countMen(data) {
  const menData = data.filter((item) => item.genero === "Hombre");
  const menCount = menData.length;
  return menCount;
}
function countAgeFirstRange(data) {                                     //labels: ["(0-2)", "(4-6)", "(8-12)", "(25-32)", "(60-100)"],
  const firstRangeData = data.filter((item) => item.edad === "(0-2)");
  const firstRangeCount = firstRangeData.length;
  return firstRangeCount;
}
function countAgeSecondRange(data) {
  const secondRangeData = data.filter((item) => item.edad === "(4-6)");
  const secondRangeCount = secondRangeData.length;
  return secondRangeCount;
}
function countAgeThirdRange(data) {
  const thirdRangeData = data.filter((item) => item.edad === "(8-12)");
  const thirdRangeCount = thirdRangeData.length;
  return thirdRangeCount;
}

function countAgeFifthRange(data) {
  const fifthRangeData = data.filter((item) => item.edad === "(25-32)");
  const fifthRangeCount = fifthRangeData.length;
  return fifthRangeCount;
}
function countAgeSixthRange(data) {
  const sixthRangeData = data.filter((item) => item.edad === "(60-100)");
  const sixthRangeCount = sixthRangeData.length;
  return sixthRangeCount;
}
function countNeutralEmotion(data){
  const neutralEmotionData = data.filter((item)=> item.emocion === "neutral");  //  labels: ["Neutral","Enojo", "Miedo", "Felicidad", "Tristeza", "Sorpresa"],
  const neutralEmotionCount = neutralEmotionData.length;
  return neutralEmotionCount;
}
function countAngryEmotion(data){
  const angryEmotionData = data.filter((item)=> item.emocion === "enojo");
  const angryEmotionCount = angryEmotionData.length;
  return angryEmotionCount;
}
function countFearEmotion(data){
  const fearEmotionData = data.filter((item)=> item.emocion === "miedo"); 
  const fearEmotionCount = fearEmotionData.length;
  return fearEmotionCount;
}
function countHappyEmotion(data){
  const happyEmotionData = data.filter((item)=> item.emocion === "felicidad"); 
  const happyEmotionCount = happyEmotionData.length;
  return happyEmotionCount;
}
function countSadnessEmotion(data){
  const sadnessEmotionData = data.filter((item)=> item.emocion === "tristeza"); 
  const sadnessEmotionCount = sadnessEmotionData.length;
  return sadnessEmotionCount;
}
function countSurpriseEmotion(data){
  const surpriseEmotionData = data.filter((item)=> item.emocion === "sorpresa"); 
  const surpriseEmotionCount = surpriseEmotionData.length;
  return surpriseEmotionCount;
}
function percentageCalc(totalData, data) {
  return ((data * 100) / totalData).toFixed(2);
}                                                                 //labels: ["(0-2)", "(4-6)", "(8-12)", "(25-32)", "(60-100)"],


function mensRangeAgeData(data) {
  const ageRanges = {
    "(0-2)": 0,
    "(4-6)": 0,
    "(8-12)": 0,
    "(25-32)": 0,
    "(60-100)": 0,
  };

  for (let i = 0; i < data.length; i++) {
    const age = data[i].edad;
    if (data[i].genero === "Hombre" && ageRanges.hasOwnProperty(age)) {
      ageRanges[age]++;
    }
  }
  return Object.values(ageRanges);
}

function womensRangeAgeData(data){
  const ageRanges = {
    "(0-2)": 0,
    "(4-6)": 0,
    "(8-12)": 0,
    "(25-32)": 0,
    "(60-100)": 0,
  };

  for (let i = 0; i < data.length; i++) {
    const age = data[i].edad;
    if (data[i].genero === "Mujer" && ageRanges.hasOwnProperty(age)) {
      ageRanges[age]++;
    }
  }
  return Object.values(ageRanges);
}

function mensRangeEmotionData(data) {       //labels: ["Neutral","Enojo", "Miedo", "Felicidad", "Tristeza", "Sorpresa"],
  const emotionRanges = {
    "neutral": 0,
    "enojo": 0,
    "miedo": 0,
    "felicidad": 0,
    "tristeza": 0,
    "sorpresa": 0,
  };

  for (let i = 0; i < data.length; i++) {
    const emotion = data[i].emocion;
    if (data[i].genero === "Hombre" && emotionRanges.hasOwnProperty(emotion)) {
      emotionRanges[emotion]++;
    }
  }
  return Object.values(emotionRanges);
}
function womensRangeEmotionData(data) {       //labels: ["Neutral","Enojo", "Miedo", "Felicidad", "Tristeza", "Sorpresa"],
  const emotionRanges = {
    "neutral": 0,
    "enojo": 0,
    "miedo": 0,
    "felicidad": 0,
    "tristeza": 0,
    "sorpresa": 0,
  };

  for (let i = 0; i < data.length; i++) {
    const emotion = data[i].emocion;
    if (data[i].genero === "Mujer" && emotionRanges.hasOwnProperty(emotion)) {
      emotionRanges[emotion]++;
    }
  }
  return Object.values(emotionRanges);
}
function ageRangeEmotionsData(data) {       
  const emotionRanges = {
    "neutral": 0,
    "enojo": 0,
    "miedo": 0,
    "felicidad": 0,
    "tristeza": 0,
    "sorpresa": 0,
  };
  const ageRanges = {
    "(0-2)": 0,
    "(4-6)": 0,
    "(8-12)": 0,
    "(25-32)": 0,
    "(60-100)": 0,
  };

  for (let i = 0; i < data.length; i++) {
    const emotion = data[i].emocion;
    const age = data[i].edad;
    if (data[i].edad === age && emotionRanges.hasOwnProperty(emotion)) {
      emotionRanges[emotion]++;
    }
  }
  return Object.values(emotionRanges);
}




fetch("/hbrs/json-data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const totalRangeAgeEmotion = ageRangeEmotionsData(data.data)

    const totalWomen = countWomen(data.data);
    const totalMen = countMen(data.data);
    const totalGender = totalMen + totalWomen;
    const percentageMen = percentageCalc(totalGender, totalMen);
    const percentageWomen = percentageCalc(totalGender, totalWomen);
        //Grafico Radial de generos
        let radialChartGenders = {
          chart: {
            height: 280,
            type: "radialBar",
          },
          series: [percentageMen, percentageWomen],
          plotOptions: {
            radialBar: {
              dataLabels: {},
            },
          },
          labels: ["Hombres", "Mujeres"],
        };


    const totalAgeFirtsRange = countAgeFirstRange(data.data);
    const totalAgeSecondRange = countAgeSecondRange(data.data);
    const totalAgethirdRange = countAgeThirdRange(data.data);
    const totalAgefifthRange = countAgeFifthRange(data.data);
    const totalAgeSixthRange = countAgeSixthRange(data.data);
    const totalAgesRanges =
      totalAgeFirtsRange +
      totalAgeSecondRange +
      totalAgethirdRange +
      totalAgefifthRange +
      totalAgeSixthRange;
    const percetangeFirstRange = percentageCalc(
      totalAgesRanges,
      totalAgeFirtsRange
    );
    const percetangeSecondRange = percentageCalc(
      totalAgesRanges,
      totalAgeSecondRange
    );
    const percetangeThirdRange = percentageCalc(
      totalAgesRanges,
      totalAgethirdRange
    );

    const percetangeFifthRange = percentageCalc(
      totalAgesRanges,
      totalAgefifthRange
    );
    const percetangeSixthRange = percentageCalc(
      totalAgesRanges,
      totalAgeSixthRange
    );

      //Grafico Radial de generos
    let radialChartAges = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [percetangeFirstRange, percetangeSecondRange, percetangeThirdRange, percetangeFifthRange, percetangeSixthRange],
      plotOptions: {
        radialBar: {
          dataLabels: {},
        },
      },
      labels: ["(0-2)", "(4-6)", "(8-12)", "(25-32)", "(60-100)"],
    };

    const totalNeutralEmotion = countNeutralEmotion(data.data);
    const totalAngryEmotion = countAngryEmotion(data.data);
    const totalFearEmotion = countFearEmotion(data.data);
    const totalHappyEmotion = countHappyEmotion(data.data);
    const totalSadnessEmotion = countSadnessEmotion(data.data);
    const totalSurpriseEmotion = countSurpriseEmotion(data.data);
    const totalEmotions = totalNeutralEmotion + totalAngryEmotion + totalFearEmotion + totalHappyEmotion +totalSadnessEmotion + totalSurpriseEmotion
    const percetangeAngryEmotion = percentageCalc(totalEmotions, totalAngryEmotion);
    const percetangeNeutralEmotion = percentageCalc(totalEmotions, totalNeutralEmotion);
    const percetangeFearEmotion = percentageCalc(totalEmotions, totalFearEmotion);
    const percetangeHappyEmotion = percentageCalc(totalEmotions, totalHappyEmotion);
    const percetangeSadnessEmotion = percentageCalc(totalEmotions, totalSadnessEmotion);
    const percetangeSurpriseEmotion = percentageCalc(totalEmotions, totalSurpriseEmotion);

    let radialChartEmotions = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [percetangeNeutralEmotion, percetangeAngryEmotion,percetangeFearEmotion, percetangeHappyEmotion, percetangeSadnessEmotion,percetangeSurpriseEmotion ],
      plotOptions: {
        radialBar: {
          dataLabels: {},
        },
      },
      labels: ["Neutral","Enojo", "Miedo", "Felicidad", "Tristeza", "Sorpresa"],
    };


    const totalAgeRangeMen =mensRangeAgeData(data.data)
    const totalAgeRangeWomen = womensRangeAgeData(data.data)

    let genderXAge = {
      series: [
        {
          name: "Hombre",
          data: totalAgeRangeMen,
        },
        {
          name: "Mujer",
          data: totalAgeRangeWomen,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["(0-2)", "(4-6)", "(8-12)", "(25-32)", "(60-100)"],
      },
      yaxis: {
        title: {
          text: "Cantidad",
        },
      },
      fill: {
        opacity: 1,
      },
    };
    const totalEmotionsRangeMen = mensRangeEmotionData(data.data);
    const totalEmotionsRangeWomen = womensRangeEmotionData(data.data);


    let emotionXGender = {
      series: [
        {
          name: "Hombre",
          data: totalEmotionsRangeMen
        },
        {
          name: "Mujer",
          data: totalEmotionsRangeWomen,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Neutral","Enojo", "Miedo", "Felicidad", "Tristeza", "Sorpresa"],
      },
      yaxis: {
        title: {
          text: "Cantidad",
        },
      },
      fill: {
        opacity: 1,
      },
    };

    //RENDERIZACION DE GRAFICAS 
    new ApexCharts(
      document.querySelector("#radial_chart-gen"),
      radialChartGenders
    ).render();

    
    new ApexCharts(
      document.querySelector("#radial_chart-age"),
      radialChartAges
    ).render();

    new ApexCharts(
      document.querySelector("#radial_chart-emo"),
      radialChartEmotions
    ).render();

    new ApexCharts(
      document.querySelector("#barAgexGender"), 
      genderXAge)
      .render();

    new ApexCharts(
      document.querySelector("#barEmotionxGender"),
      emotionXGender
    ).render();

  })
  
  .catch((error) => {
    console.error("Error al obtener el JSON:", error);
  });

let emotionXAges = {
  series: [
    {
      name: "(0-4)",
      data: [44, 55, 57, 56, 61],
    },
    {
      name: "(4-6)",
      data: [76, 85, 101, 98, 87],
    },
    {
      name: "(8-12)",
      data: [76, 85, 101, 98, 87],
    },
    {
      name: "(15-20)",
      data: [76, 85, 101, 98, 87],
    },
    {
      name: "(25-32)",
      data: [76, 85, 101, 98, 87],
    },
    {
      name: "(32-60)",
      data: [76, 85, 101, 98, 87],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Enojo", "Miedo", "Felicidad", "Tristeza", "Neutral"],
  },
  yaxis: {
    title: {
      text: "Cantidad",
    },
  },
  fill: {
    opacity: 1,
  },
};

new ApexCharts(document.querySelector("#EmotionsXAges"), emotionXAges).render();
