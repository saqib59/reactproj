import EarnCart from "./EarnCart";
import EarnSliderEntry from "./EarnSliderEntry";
import Fade from "react-reveal/Fade";
import { useState } from "react";

export default function Earn({ data }) {
  const [initialDeposit, setInitialDeposit] = useState([1000]);
  const [monthlyDeposit, setMonthlyDeposit] = useState([50]);
  const [riskAppetite, setRiskAppetite] = useState([2]);

  function calculateSum(initial, monthly, investmentStrategy) {
    var varValue = initial * (monthly * 12 * 30);
    var sum = 0;

    for (var i = 1; i <= 30 * 12; i++) {
      sum +=
        (varValue *
          (investmentStrategy === 0
            ? 3.23
            : investmentStrategy === 1
            ? 5.31
            : investmentStrategy === 2
            ? 7.41
            : 9.63)) /
        100;
    }

    return sum;
  }

  function calculateTraditionalSavings(calculatedSum) {
    const traditionalSavings = calculatedSum * 2.2;
    return traditionalSavings;
  }

  return (
    <div className="earn__section">
      <Fade bottom>
        <div className="earn__section__heading">{data.five_heading}</div>
      </Fade>
      <div className="earn__section__info">{data.five__para}</div>
      <div className="earn__section__sliders">
        <EarnSliderEntry
          label={data.five__para__first_h}
          max={50000}
          value={initialDeposit}
          onChange={(value) => setInitialDeposit(value)}
        />
        <EarnSliderEntry
          label={data.five__para_second_h}
          max={2500}
          value={monthlyDeposit}
          onChange={(value) => setMonthlyDeposit(value)}
        />
        <EarnSliderEntry
          label={data.five__para__third_h}
          max={3}
          options={[
            data.five__para__third_one,
            data.five__para__third_two,
            data.five__para__third_three,
            data.five__para__third_four,
          ]}
          value={riskAppetite}
          onChange={(value) => setRiskAppetite(value)}
        />
      </div>
      <div className="earn__section__content">
        <div className="earn__section__content__left">
          <div className="earn__section__content__left__content">
            <div className="earn__section__content__left__content__entry">
              <div className="earn__section__content__left__content__entry__dot" />
              <div className="earn__section__content__left__content__entry__content">
                <div className="earn__section__content__left__content__entry__content__heading">
                  {data.five__para__third_box_one}
                </div>
                <div className="earn__section__content__left__content__entry__content__info">
                  {calculateSum(
                    initialDeposit[0],
                    monthlyDeposit[0],
                    riskAppetite[0]
                  )
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
            </div>
            <div className="earn__section__content__left__content__entry">
              <div className="earn__section__content__left__content__entry__dot" />
              <div className="earn__section__content__left__content__entry__content">
                <div className="earn__section__content__left__content__entry__content__heading">
                  {data.five__para__third_box_two}
                </div>
                <div className="earn__section__content__left__content__entry__content__info">
                  {calculateTraditionalSavings(
                    calculateSum(
                      initialDeposit[0],
                      monthlyDeposit[0],
                      riskAppetite[0]
                    )
                  )
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
            </div>
            <div className="earn__section__content__left__content__entry">
              <div className="earn__section__content__left__content__entry__dot" />
              <div className="earn__section__content__left__content__entry__content">
                <div className="earn__section__content__left__content__entry__content__heading">
                  {data.five__para__third_box_three}
                </div>
                <div className="earn__section__content__left__content__entry__content__info">
                  {(monthlyDeposit[0] * 12 * 30 + initialDeposit[0] * 12 * 30)
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
            </div>
          </div>
          <button className="earn__section__content__left__button">
            {data.five__para__button}
          </button>
        </div>
        <div className="earn__section__content__right">
          <div className="earn__section__content__right__top">
            <EarnCart
              data={[
                {
                  name: "Today",
                  initialDeposit: 0,
                  monthlyDeposit: 0,
                  riskAppetite: 0,
                },
                {
                  name: "1 Year",
                  initialDeposit: initialDeposit[0] / 4,
                  monthlyDeposit: monthlyDeposit[0] / 4,
                  riskAppetite: (riskAppetite[0] * 1000) / 4,
                },
                {
                  name: "2 Year",
                  initialDeposit: initialDeposit[0] / 2,
                  monthlyDeposit: monthlyDeposit[0] / 2,
                  riskAppetite: (riskAppetite[0] * 1000) / 2,
                },
                {
                  name: "3 Year",
                  initialDeposit: initialDeposit[0],
                  monthlyDeposit: monthlyDeposit[0],
                  riskAppetite: riskAppetite[0] * 1000,
                },
              ]}
            />
          </div>
          <div className="earn__section__content__right__bottom">
            <div className="earn__section__content__right__bottom__entry">
              Today
            </div>
            <div className="earn__section__content__right__bottom__entry">
              30 Years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
