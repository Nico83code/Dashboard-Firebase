import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup
} from "victory";

const grayscale = {
  area: {
    style: {
      data: {
        fill: "#252525"
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#252525",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 25,
        fill: "#252525",
        stroke: "transparent"
      },
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  bar: {
    style: {
      data: {
        fill: "#252525",
        padding: 8,
        strokeWidth: 0
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#252525",
        strokeWidth: 1
      },
      maxLabels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      },
      median: {
        padding: 8,
        stroke: "#252525",
        strokeWidth: 1
      },
      medianLabels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      },
      min: {
        padding: 8,
        stroke: "#252525",
        strokeWidth: 1
      },
      minLabels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      },
      q1: {
        padding: 8,
        fill: "#969696"
      },
      q1Labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      },
      q3: {
        padding: 8,
        fill: "#969696"
      },
      q3Labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    boxWidth: 20,
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  candlestick: {
    style: {
      data: {
        stroke: "#252525",
        strokeWidth: 1
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    candleColors: {
      positive: "#ffffff",
      negative: "#252525"
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  chart: {
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        stroke: "#252525",
        strokeWidth: 2
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  group: {
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ],
    width: 450,
    height: 300,
    padding: 50
  },
  legend: {
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      },
      title: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 5,
        fill: "#252525",
        stroke: "transparent"
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        stroke: "#252525",
        strokeWidth: 2
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 20,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ],
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        fill: "#252525",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 10,
        fill: "#252525",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  },
  stack: {
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ],
    width: 450,
    height: 300,
    padding: 50
  },
  tooltip: {
    style: {
      fontFamily:
        "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
      fontSize: 14,
      letterSpacing: "normal",
      padding: 5,
      fill: "#252525",
      stroke: "transparent",
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#252525",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        padding: 5,
        fill: "#252525",
        stroke: "transparent",
        pointerEvents: "none"
      },
      flyout: {
        stroke: "#252525",
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    },
    width: 450,
    height: 300,
    padding: 50,
    colorScale: [
      "#252525",
      "#525252",
      "#737373",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
      "#f0f0f0"
    ]
  }
};

const wincTheme = {
  area: {
    style: {
      data: {
        fill: "#212121"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      grid: {
        fill: "none",
        stroke: "none"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 20
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      maxLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      median: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      medianLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      min: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      minLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q1: {
        padding: 8,
        fill: "#455A64"
      },
      q1Labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q3: {
        padding: 8,
        fill: "#455A64"
      },
      q3Labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    boxWidth: 20,
    width: 350,
    height: 350,
    padding: 50
  },
  candlestick: {
    style: {
      data: {
        stroke: "#455A64"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    candleColors: {
      positive: "#ffffff",
      negative: "#455A64"
    },
    width: 350,
    height: 350,
    padding: 50
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  group: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  legend: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      title: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  pie: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    style: {
      data: {
        padding: 8,
        stroke: "#ECEFF1",
        strokeWidth: 1
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 20,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        fill: "#455A64",
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  stack: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  tooltip: {
    style: {
      fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 12,
      letterSpacing: "normal",
      padding: 5,
      fill: "#455A64",
      stroke: "transparent",
      strokeWidth: 0,
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#212121",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
        pointerEvents: "none"
      },
      flyout: {
        stroke: "#212121",
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    },
    width: 350,
    height: 350,
    padding: 50
  }
};

const getRandomRating = () => Math.random() * 5;
// const getRandomRating = () => 2;

let assignmentRatingAverage = [
  { assignment: "W1D1-2" },
  { assignment: "W1D1-1" },
  { assignment: "W1D1-3" },
  { assignment: "W1D2-1" },
  { assignment: "W1D2-2" },
  { assignment: "W1D3-1" },
  { assignment: "W1D3-1" },
  { assignment: "W1D3-2" },
  { assignment: "W1D3-3" },
  { assignment: "W1D3-4" },
  { assignment: "W1D3-5" },
  { assignment: "W1D3-6" }
];

assignmentRatingAverage = assignmentRatingAverage.map(avg => ({
  assignment: avg.assignment,
  difficultyRating: getRandomRating(),
  enjoymentRating: getRandomRating()
}));

// Add label
const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
  assignment: avg.assignment,
  difficultyRating: avg.difficultyRating,
  enjoymentRating: avg.enjoymentRating,
  label: `Opdracht ${
    avg.assignment
  }, difficultyRating: ${avg.difficultyRating.toFixed(
    1
  )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`
}));

const chartExample = () => (
  <>
    <VictoryChart domainPadding={15} theme={wincTheme}>
      <VictoryGroup offset={20}>
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={assignmentRatingAverageWithLabels}
          x="assignment"
          y="difficultyRating"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            avg => avg.assignment
          )}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={assignmentRatingAverageWithLabels}
          x="assignment"
          y="enjoymentRating"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            avg => avg.assignment
          )}
        />
      </VictoryGroup>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={assignmentRatingAverageWithLabels.map(
          avg => avg.assignment
        )}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>

    <VictoryChart domainPadding={15} theme={wincTheme}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" }
        }}
        data={assignmentRatingAverage}
        x="assignment"
        y="difficultyRating"
      />
      <VictoryLine
        style={{
          data: { stroke: "#ff00ff" },
          parent: { border: "1px solid #ccc" }
        }}
        data={assignmentRatingAverage}
        x="assignment"
        y="enjoymentRating"
      />
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={assignmentRatingAverage.map(avg => avg.assignment)}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
  </>
);
export default chartExample;
