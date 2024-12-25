import 'package:flutter/material.dart';

class Reservations extends StatelessWidget {
  const Reservations({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Sample data for the list
    final List<String> items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('List Widget Example'),
      ),
      body: ListView.builder(
        itemCount: items.length, // Number of items in the list
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(items[index]), // Display item text
            leading: Icon(Icons.list), // Optional leading icon
            trailing: Icon(Icons.arrow_forward), // Optional trailing icon
            onTap: () {
              // Action when the item is tapped
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text('Tapped on ${items[index]}')),
              );
            },
          );
        },
      ),
    );
  }
}