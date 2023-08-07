import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createCalendar} from './src/utils';

function App() {
  const [month, setMonth] = useState(0);
  const calendar = createCalendar(month);
  return (
    <View>
      <Button title="+" onPress={() => setMonth(month + 1)} />
      <Button title="-" onPress={() => setMonth(month - 1)} />
      <View style={styles.sectionContainer}>
        {calendar.map((week, i) => {
          return (
            <View style={styles.row} key={'week' + i}>
              {week.map(day => {
                return (
                  <View style={styles.cell} key={'day' + day}>
                    <Text>{day}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 44,
    height: 44,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
