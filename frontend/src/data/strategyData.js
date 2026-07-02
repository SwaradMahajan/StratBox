const strategyData = {
  1: {
    currentTyre: "Medium",
    tyreAge: 16,

    pitWindow: {
      start: 31,
      end: 35,
    },

    recommendedStrategies: {
      oneStop: {
        pitLap: 33,
        nextTyre: "Hard",
      },

      twoStop: [
        {
          pitLap: 24,
          nextTyre: "Medium",
        },
        {
          pitLap: 43,
          nextTyre: "Soft",
        },
      ],
    },

    predictedFinish: 1,
  },

  2: {
    currentTyre: "Hard",
    tyreAge: 8,

    pitWindow: {
      start: 39,
      end: 44,
    },

    recommendedStrategies: {
      oneStop: {
        pitLap: 41,
        nextTyre: "Medium",
      },

      twoStop: [
        {
          pitLap: 28,
          nextTyre: "Medium",
        },
        {
          pitLap: 47,
          nextTyre: "Soft",
        },
      ],
    },

    predictedFinish: 2,
  },
};

export default strategyData;