import { FlatList, StyleSheet, Text, View } from 'react-native';

const recipes = [
  {id: '1', 'title': 'Chicken Piccata', 'type': 'Main Dish', 'category': 'Italian'},
  {id: '2', 'title': 'Beef Stroganoff', 'type': 'Main Dish', 'category': 'Russian'},
  {id: '3', 'title': 'Caesar Salad', 'type': 'Salad', 'category': 'American'}
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.type} - {item.category}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 64,
    backgroundColor: '#fffaf2',
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  category: {
    marginTop: 4,
    color: '#777',
  },
});