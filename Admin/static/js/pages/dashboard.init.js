//Edades detectadas
const firstAgeRange = "(0-2)";
const secondAgeRange = "(4-6)";
const thirdAgeRange = "(8-12)";
const fourthgeRange = "(25-32)";
const fifthAgeRange = "(60-100)";

//Emociones detectadas
const emotionAngry = "enojo";
const emotionHappy = "felicidad";
const emotionSad = "trizteza";
const emotionFear = "miedo";
const emotionSurprise = "sorpresa";
const emotionNeutral = "neutral";


//Edades agrupadas en un objeto
const ageRanges = {
  "(0-2)": 0,
  "(4-6)": 0,
  "(8-12)": 0,
  "(25-32)": 0,
  "(60-100)": 0,
};

//Emociones agrupadas en un objeto
const emotionRanges = {
  neutral: 0,
  enojo: 0,
  miedo: 0,
  felicidad: 0,
  tristeza: 0,
  sorpresa: 0,
};
//Emociones agrupadas en un array
const emotionsGroupDetections = [
  "neutral",
  "enojo",
  "miedo",
  "felicidad",
  "tristeza",
  "sorpresa",
];
//Edades agrupadas en un array
const ageGroupDetections = ["(0-2)", "(4-6)", "(8-12)", "(25-32)", "(60-100)"];

//Funcion para contar cuantas mujeres hay en la base de datos
function countWomen(data) {
  const womenData = data.filter((item) => item.genero === "Mujer");
  const womenCount = womenData.length;
  return womenCount;
}
//Funcion para contar cuantos hombres hay en la base de datos
function countMen(data) {
  const menData = data.filter((item) => item.genero === "Hombre");
  const menCount = menData.length;
  return menCount;
}
//Funcion para contar cuantas veces se detecto el primer rango de edad
function countAgeFirstRange(data) {
  
  const firstRangeData = data.filter((item) => item.edad === firstAgeRange);
  const firstRangeCount = firstRangeData.length;
  return firstRangeCount;
}
//Funcion para contar cuantas veces se detecto el segundo rango de edad
function countAgeSecondRange(data) {
  const secondRangeData = data.filter((item) => item.edad === secondAgeRange);
  const secondRangeCount = secondRangeData.length;
  return secondRangeCount;
}
//Funcion para contar cuantas veces se detecto el tercer rango de edad
function countAgeThirdRange(data) {
  const thirdRangeData = data.filter((item) => item.edad === thirdAgeRange);
  const thirdRangeCount = thirdRangeData.length;
  return thirdRangeCount;
}
//Funcion para contar cuantas veces se detecto el cuarto rango de edad
function countAgeFifthRange(data) {
  const fifthRangeData = data.filter((item) => item.edad === fourthgeRange);
  const fifthRangeCount = fifthRangeData.length;
  return fifthRangeCount;
}
//Funcion para contar cuantas veces se detecto el quinto rango de edad
function countAgeSixthRange(data) {
  const sixthRangeData = data.filter((item) => item.edad === fifthAgeRange);
  const sixthRangeCount = sixthRangeData.length;
  return sixthRangeCount;
}
//Funcion para contar cuantas veces se detecto la emocion neutral
function countNeutralEmotion(data) {
  const neutralEmotionData = data.filter(
    (item) => item.emocion === emotionNeutral
  ); 
  const neutralEmotionCount = neutralEmotionData.length;
  return neutralEmotionCount;
}
//Funcion para contar cuantas veces se detecto la emocion enojo
function countAngryEmotion(data) {
  const angryEmotionData = data.filter((item) => item.emocion === emotionAngry);
  const angryEmotionCount = angryEmotionData.length;
  return angryEmotionCount;
}
//Funcion para contar cuantas veces se detecto la emocion miedo
function countFearEmotion(data) {
  const fearEmotionData = data.filter((item) => item.emocion === emotionFear);
  const fearEmotionCount = fearEmotionData.length;
  return fearEmotionCount;
}
//Funcion para contar cuantas veces se detecto la emocion felicidad
function countHappyEmotion(data) {
  const happyEmotionData = data.filter((item) => item.emocion === emotionHappy);
  const happyEmotionCount = happyEmotionData.length;
  return happyEmotionCount;
}
//Funcion para contar cuantas veces se detecto la emocion tristeza
function countSadnessEmotion(data) {
  const sadnessEmotionData = data.filter((item) => item.emocion === emotionSad);
  const sadnessEmotionCount = sadnessEmotionData.length;
  return sadnessEmotionCount;
}
//Funcion para contar cuantas veces se detecto la emocion sorpresa
function countSurpriseEmotion(data) {
  const surpriseEmotionData = data.filter(
    (item) => item.emocion === emotionSurprise
  );
  const surpriseEmotionCount = surpriseEmotionData.length;
  return surpriseEmotionCount;
}
//Funcion para calculo de porcentaje de los datos
function percentageCalc(totalData, data) {
  return ((data * 100) / totalData).toFixed(2);
} 
//Funcion para calculo de cuantos hombres se han detectado de cierto tipo de rango de edad
function mensRangeAgeData(data) {
  for (let i = 0; i < data.length; i++) {
    const age = data[i].edad;
    if (data[i].genero === "Hombre" && ageRanges.hasOwnProperty(age)) {
      ageRanges[age]++;
    }
  }
  return Object.values(ageRanges);
}
//Funcion para calculo de cuantas mujeres se han detectado de cierto tipo de rango de edad
function womensRangeAgeData(data) {
  for (let i = 0; i < data.length; i++) {
    const age = data[i].edad;
    if (data[i].genero === "Mujer" && ageRanges.hasOwnProperty(age)) {
      ageRanges[age]++;
    }
  }
  return Object.values(ageRanges);
}
//Funcion para calculo de cuantas hombres han detectado que emocion
function mensRangeEmotionData(data) {
  for (let i = 0; i < data.length; i++) {
    const emotion = data[i].emocion;
    if (data[i].genero === "Hombre" && emotionRanges.hasOwnProperty(emotion)) {
      emotionRanges[emotion]++;
    }
  }
  return Object.values(emotionRanges);
}

//Funcion para calculo de cuantas mujeres han detectado que emocion
function womensRangeEmotionData(data) {
  //labels: ["Neutral","Enojo", "Miedo", "Felicidad", "Tristeza", "Sorpresa"],
  for (let i = 0; i < data.length; i++) {
    const emotion = data[i].emocion;
    if (data[i].genero === "Mujer" && emotionRanges.hasOwnProperty(emotion)) {
      emotionRanges[emotion]++;
    }
  }
  return Object.values(emotionRanges);
}
//Funcion para detectar las emociones detectadas en los rangos de edad
function countEmotionInAgeRange(dataArray, targetEmotion, targetAgeRange) {
  let count = 0;

  for (const item of dataArray) {
    if (item.emocion === targetEmotion && item.edad === targetAgeRange) {
      count++;
    }
  }
  return count;
}
//funcion para almacenar las emociones y edades detectadas en un objeto muestra cuantas veces se detectaron las emociones en los rangos de edad
function countEmotionInAgeRanges(dataArray, emotionsArray, ageArray) {
  const result = {};
  for (const emotion of emotionsArray) {
    result[emotion] = {};

    for (const ageRange of ageArray) {
      const count = countEmotionInAgeRange(dataArray, emotion, ageRange);
      result[emotion][ageRange] = count;
    }
  }

  return result;
}

fetch("/hbrs/json-data")
  .then((response) => response.json())
  .then((data) => {
    //Grafico Radial de generos
    const totalWomen = countWomen(data.data);
    const totalMen = countMen(data.data);
    const totalGender = totalMen + totalWomen;
    const percentageMen = percentageCalc(totalGender, totalMen);
    const percentageWomen = percentageCalc(totalGender, totalWomen);

    let radialChartGenders = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [percentageMen, percentageWomen],
      plotOptions: {
        radialBar: {
          dataLabels: {
          },
        },
      },
      labels: ["Hombres", "Mujeres"],
    };

    //Grafico Radial de edades
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

    let radialChartAges = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [
        percetangeFirstRange,
        percetangeSecondRange,
        percetangeThirdRange,
        percetangeFifthRange,
        percetangeSixthRange,
      ],
      plotOptions: {
        radialBar: {
          dataLabels: {},
        },
      },
      labels: ["(0-2)", "(4-6)", "(8-12)", "(25-32)", "(60-100)"],
    };
    //Grafico Radial de edades
    const totalNeutralEmotion = countNeutralEmotion(data.data);
    const totalAngryEmotion = countAngryEmotion(data.data);
    const totalFearEmotion = countFearEmotion(data.data);
    const totalHappyEmotion = countHappyEmotion(data.data);
    const totalSadnessEmotion = countSadnessEmotion(data.data);
    const totalSurpriseEmotion = countSurpriseEmotion(data.data);
    const totalEmotions =
      totalNeutralEmotion +
      totalAngryEmotion +
      totalFearEmotion +
      totalHappyEmotion +
      totalSadnessEmotion +
      totalSurpriseEmotion;
    const percetangeAngryEmotion = percentageCalc(
      totalEmotions,
      totalAngryEmotion
    );
    const percetangeNeutralEmotion = percentageCalc(
      totalEmotions,
      totalNeutralEmotion
    );
    const percetangeFearEmotion = percentageCalc(
      totalEmotions,
      totalFearEmotion
    );
    const percetangeHappyEmotion = percentageCalc(
      totalEmotions,
      totalHappyEmotion
    );
    const percetangeSadnessEmotion = percentageCalc(
      totalEmotions,
      totalSadnessEmotion
    );
    const percetangeSurpriseEmotion = percentageCalc(
      totalEmotions,
      totalSurpriseEmotion
    );

    let radialChartEmotions = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [
        percetangeNeutralEmotion,
        percetangeAngryEmotion,
        percetangeFearEmotion,
        percetangeHappyEmotion,
        percetangeSadnessEmotion,
        percetangeSurpriseEmotion,
      ],
      plotOptions: {
        radialBar: {
          dataLabels: {},
        },
      },
      labels: [
        "Neutral",
        "Enojo",
        "Miedo",
        "Felicidad",
        "Tristeza",
        "Sorpresa",
      ],
    };

    //Grafico de barras de edades y generos
    const totalAgeRangeMen = mensRangeAgeData(data.data);
    const totalAgeRangeWomen = womensRangeAgeData(data.data);

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
    //Grafico de barras de emociones y generos
    const totalEmotionsRangeMen = mensRangeEmotionData(data.data);
    const totalEmotionsRangeWomen = womensRangeEmotionData(data.data);

    let emotionXGender = {
      series: [
        {
          name: "Hombre",
          data: totalEmotionsRangeMen,
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
        categories: [
          "Neutral",
          "Enojo",
          "Miedo",
          "Felicidad",
          "Tristeza",
          "Sorpresa",
        ],
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

    //Grafico de barras edades y emociones
    const emotionAndAge = countEmotionInAgeRanges(
      data.data,
      emotionsGroupDetections,
      ageGroupDetections
    );

    let emotionXAges = {
      series: [
        {
          name: "(0-2)",
          data: [
            emotionAndAge.enojo[firstAgeRange],
            emotionAndAge.miedo[firstAgeRange],
            emotionAndAge.felicidad[firstAgeRange],
            emotionAndAge.tristeza[firstAgeRange],
            emotionAndAge.sorpresa[firstAgeRange],
          ],
        },
        {
          name: "(4-6)",
          data: [
            emotionAndAge.enojo[secondAgeRange],
            emotionAndAge.miedo[secondAgeRange],
            emotionAndAge.felicidad[secondAgeRange],
            emotionAndAge.tristeza[secondAgeRange],
            emotionAndAge.sorpresa[secondAgeRange],
          ],
        },
        {
          name: "(8-12)",
          data: [
            emotionAndAge.enojo[thirdAgeRange],
            emotionAndAge.miedo[thirdAgeRange],
            emotionAndAge.felicidad[thirdAgeRange],
            emotionAndAge.tristeza[thirdAgeRange],
            emotionAndAge.sorpresa[thirdAgeRange],
          ],
        },
        {
          name: "(25-32)",
          data: [
            emotionAndAge.enojo[fourthgeRange],
            emotionAndAge.miedo[fourthgeRange],
            emotionAndAge.felicidad[fourthgeRange],
            emotionAndAge.tristeza[fourthgeRange],
            emotionAndAge.sorpresa[fourthgeRange],
          ],
        },
        {
          name: "(60-100)",
          data: [
            emotionAndAge.enojo[fifthAgeRange],
            emotionAndAge.miedo[fifthAgeRange],
            emotionAndAge.felicidad[fifthAgeRange],
            emotionAndAge.tristeza[fifthAgeRange],
            emotionAndAge.sorpresa[fifthAgeRange],
          ],
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
      genderXAge
    ).render();

    new ApexCharts(
      document.querySelector("#barEmotionxGender"),
      emotionXGender
    ).render();
    new ApexCharts(
      document.querySelector("#EmotionsXAges"),
      emotionXAges
    ).render();
  })

  .catch((error) => {
    console.error("Error al obtener el JSON:", error);
  });
