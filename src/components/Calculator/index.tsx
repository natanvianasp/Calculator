import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "../Button";
import Display from "../Display";
import styles from "./styles";

export const Calculator = () => {
  const [operation, setOperation] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);
  const [numberDisplay, setNumberDisplay] = useState("");

  const [asResult, setAsResult] = useState(false);

  const [clearType, setClearType] = useState("AC");

  const handleNumberPress = (buttonValue: string) => {
    if (operation === "" && firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
      setClearType("C");
    }
    if (operation !== "" && secondNumber.length < 10) {
      setSecondNumber(secondNumber + buttonValue);
    }
  };

  const handleOperationPress = (operation: string) => {
    if (operation === "%") {
      if (secondNumber !== "" && result === 0) {
        setSecondNumber((parseFloat(secondNumber) / 100).toString());
      } else if (firstNumber !== "" && secondNumber === "") {
        setFirstNumber((parseFloat(firstNumber) / 100).toString());
      } else {
        setResult(result / 100);
      }
    } else if (operation === "+/-") {
      if (secondNumber !== "" && result === 0) {
        setSecondNumber((parseFloat(secondNumber) * -1).toString());
      } else if (firstNumber !== "" && secondNumber === "") {
        setFirstNumber((parseFloat(firstNumber) * -1).toString());
      } else {
        setResult(result * -1);
      }
    } else if (operation === ",") {
      if (firstNumber === "") {
        setFirstNumber(firstNumber + "0.");
      } else if (secondNumber !== "" && result === 0) {
        setSecondNumber(secondNumber + ".");
      } else if (firstNumber !== "" && secondNumber === "") {
        setFirstNumber(firstNumber + ".");
      } else {
        setResult(parseFloat(result.toString() + "."));
      }
    } else if (operation !== "" && result !== 0) {
      setOperation(operation);
      setFirstNumber(result.toString());
      setResult(0);
    } else {
      setOperation(operation);
      setFirstNumber(firstNumber);
    }
  };

  const Clear = () => {
    setResult(0);
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  };

  useEffect(() => {
    result === 0 &&
    firstNumber === "" &&
    secondNumber === "" &&
    operation === ""
      ? setClearType("AC")
      : setClearType("C");
  }, [Clear]);

  const getResult = () => {
    if (operation !== "" && firstNumber !== "" && secondNumber !== "") {
      switch (operation) {
        case "+":
          Clear();
          setResult(parseFloat(secondNumber) + parseFloat(firstNumber));

          break;
        case "-":
          Clear();
          setResult(parseFloat(firstNumber) - parseFloat(secondNumber));

          break;
        case "/":
          Clear();
          setResult(parseFloat(firstNumber) / parseFloat(secondNumber));

          break;
        case "*":
          Clear();
          setResult(parseFloat(secondNumber) * parseFloat(firstNumber));

          break;
        default:
          Clear();
          break;
      }
    }
  };

  useEffect(() => {
    result !== 0
      ? setNumberDisplay(result.toString().replace(".", ","))
      : firstNumber !== "" && result === 0 && secondNumber === ""
      ? setNumberDisplay(firstNumber.replace(".", ","))
      : firstNumber === "" && result === 0 && secondNumber !== ""
      ? setNumberDisplay(secondNumber.replace(".", ","))
      : firstNumber === "" && result === 0 && operation === ""
      ? setNumberDisplay((0).toString().replace(".", ","))
      : secondNumber !== "" && operation === ""
      ? setNumberDisplay(secondNumber.replace(".", ","))
      : setNumberDisplay(secondNumber.replace(".", ","));

    result !== 0 ? setAsResult(true) : setAsResult(false);
  }, [result, firstNumber, secondNumber]);

  return (
    <View style={styles.container}>
      <Display number={numberDisplay} />
      <View style={styles.row}>
        <Button title={clearType} isGray onPress={() => Clear()} />
        <Button title="±" isGray onPress={() => handleOperationPress("+/-")} />
        <Button title="%" isGray onPress={() => handleOperationPress("%")} />
        <Button
          title="÷"
          isSpecial
          isOperation
          asResult={asResult}
          onPress={() => handleOperationPress("/")}
        />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button
          title="×"
          isSpecial
          isOperation
          asResult={asResult}
          onPress={() => {
            handleOperationPress("*");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button
          title="-"
          isSpecial
          isOperation
          asResult={asResult}
          onPress={() => handleOperationPress("-")}
        />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button
          title="+"
          isSpecial
          isOperation
          asResult={asResult}
          onPress={() => handleOperationPress("+")}
        />
      </View>
      <View style={styles.row}>
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="," onPress={() => handleOperationPress(",")} />
        <Button title="=" isSpecial onPress={() => getResult()} />
      </View>
    </View>
  );
};
