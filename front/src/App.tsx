import { Button, Slider, Table } from "@radix-ui/themes";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { miasta, Miasto, IPickedCity } from "./data/cities";
import { useState } from "react";

function App() {
  const [pickedCity, setCity] = useState<string | undefined>();
  const [budget, setBudget] = useState<number>(0);
  const [savedBudget, setSavedBudget] = useState<number>(0);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [profit, setProfit] = useState<number>(0);

  function pickCity(miasto: string) {
    setCity(miasto);
  }

  function pickBudget(budget: number[]) {
    setBudget(budget[0]);
  }

  async function calculateProfit(IPickedCity: IPickedCity) {
    setLoading(true);
    setProfit(0);
    console.log({
      city_name: IPickedCity.city_name,
      marketing: IPickedCity.marketing,
    });

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(IPickedCity),
    });
    const data = await response.json().catch((err) => {
      console.log(err);
    });
    console.log(data);
    // return data;

    setProfit(data.prediction);
    setSavedBudget(budget);
    setLoading(false);
  }

  function formatNumber(num: number): string {
    return num.toLocaleString("pl-PL");
  }

  function roundNumber(num: number): string {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  // 52.068023, 19.476712

  return (
    <div className="App">
      <div className="summary">
        <div>
          {pickedCity ? <>Wybrane miasto: {pickedCity}</> : "Wybierz miasto"}
        </div>
        <div>
          Budżet: {formatNumber(budget)}
          <Slider
            defaultValue={[0]}
            value={[budget]}
            onValueChange={pickBudget}
            min={0}
            max={1000000}
            step={10000}
          />
        </div>
      </div>
      {isLoading ? (
        <div>Ładowanie...</div>
      ) : pickedCity ? (
        <Button
          size="2"
          variant="soft"
          onClick={() =>
            calculateProfit({ city_name: pickedCity!, marketing: budget })
          }
        >
          Oblicz szacowany zysk
        </Button>
      ) : (
        <Button size="2" variant="soft" disabled>
          Wybierz miasto
        </Button>
      )}
      <div>
        {profit ? <div>Szacowany przychód: {formatNumber(profit)} PLN</div> : null}
        {profit ? (
          <div className={profit - savedBudget < 0 ? "red" : ""}>
            Szacowany zysk: {formatNumber(profit - savedBudget)} PLN
          </div>
        ) : null}
        {profit ? <div>Ratio: {roundNumber(profit / savedBudget)}</div> : null}
      </div>

      <div></div>
      <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Nazwa</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Kord. X</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Kord. Y</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Populacja</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Powierzchnia</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Dzieci (%)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Młodzież (%)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Dorośli (%)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Emeryci (%)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Mężczyźni (%)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Wykształcenie wyższe (%)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Akcja</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {miasta.map((miasto: Miasto) => (
              <Table.Row
                key={miasto.nazwa}
                className={pickedCity === miasto.nazwa ? "PickedCity" : ""}
                onClick={() => {
                  pickCity(miasto.nazwa);
                }}
              >
                <Table.RowHeaderCell>{miasto.nazwa}</Table.RowHeaderCell>
                <Table.Cell>{roundNumber(miasto.koordynatX)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.koordynatY)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.populacja)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.powierzchnia)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.procentDzieci)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.procentMlodziez)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.procentDorosli)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.procentEmeryci)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.procentMezczyzni)}</Table.Cell>
                <Table.Cell>{roundNumber(miasto.procentWyksztalcenieWyzsze)}</Table.Cell>
                <Table.Cell>
                  {pickedCity === miasto.nazwa ? (
                    <Button size="2" variant="soft" disabled>
                      Wybrano
                    </Button>
                  ) : (
                    <Button
                      size="2"
                      variant="soft"
                      onClick={() => pickCity(miasto.nazwa)}
                    >
                      Wybierz
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}

export default App;
