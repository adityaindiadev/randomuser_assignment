import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

import { useState, useEffect, useRef } from 'react';

function ColComp({
  numOfCols,
  id,
  getColKeyOnClick,
  colState
}) {

  return (
    <TouchableOpacity
      onPress={() => {
        getColKeyOnClick(id)
      }}
      style={{
        width: `${100 / numOfCols}%`,
        height: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>{colState[id]}</Text>
    </TouchableOpacity>
  );
}

function generateCol(
  numOfCols,
  rowNum,
  getColKeyOnClick,
  colState
) {
  const constColCompArr = [];

  for (let i = 1; i <= numOfCols; i++) {
    const key = `${rowNum}${i}`;
    constColCompArr.push(
      <ColComp
        key={key}
        numOfCols={numOfCols}
        id={key}
        getColKeyOnClick={getColKeyOnClick}
        colState={colState}
      />
    );
  }
  return constColCompArr;
}

function generateRow(
  numOfRows,
  numOfCols,
  getColKeyOnClick,
  colState
) {
  const constRowCompArr = [];

  const obj = {};
  for (let i = 1; i <= numOfRows; i++) {
    const constColCompArr = generateCol(
      numOfCols,
      i,
      getColKeyOnClick,
      colState
    );
    constRowCompArr.push(
      <View
        key={i}
        style={{
          width: 250,
          height: 120,
          backgroundColor: 'green',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {constColCompArr}
      </View>
    );
  }
  return constRowCompArr;
}

export default function Flipkart() {
  const [row, setRow] = useState(3);
  const [col, setCol] = useState(3);
  const numColRef = useRef({ lastKey: [], num: 1 });
  const [renderUI, setRenderUI] = useState(null);
  const [colState, setColState] = useState(null);

  function getColKeyOnClick(id) {
    if (colState[id]) {
      return
    }
    // console.log(id);
    // console.log({ numColRef });
    const copyState = numColRef.current.num
    numColRef.current.num++
    numColRef.current.lastKey.push(id)
    setColState((prevState) => {
      return { ...prevState, [id]: copyState }
    })

  }

  function removeBtn() {
    if (numColRef.current.lastKey.length < 1) {
      return
    }
    numColRef.current.num--
    setColState((prevState) => {
      return { ...prevState, [numColRef.current.lastKey.pop()]: null }
    })
  }

  function generateRateKeysObject(numOfRows, numOfCols) {
    const obj = {}
    for (let i = 1; i <= numOfRows; i++) {
      for (let j = 1; j <= numOfCols; j++) {
        const key = `${i}${j}`;
        obj[key] = null;
      }
    }
    return obj

  }

  useEffect(() => {
    setColState(generateRateKeysObject(row, col))
  }, [])


  useEffect(() => {
    if (colState != null) {
      const UI = generateRow(
        row,
        col,
        getColKeyOnClick,
        colState
      )
      setRenderUI(UI)
    }
  }, [colState]);

  return (
    <SafeAreaView style={styles.container}>


      {renderUI}
      <Button
        title='Remove'
        onPress={removeBtn}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  }
});
