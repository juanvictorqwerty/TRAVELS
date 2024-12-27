import 'package:flutter/material.dart';

class Reservations extends StatefulWidget {
  const Reservations({Key? key}) : super(key: key);

  @override
  State<Reservations> createState() => _ReservationsState();
}

class _ReservationsState extends State<Reservations> {
  // List to hold reservation items
  List<String> reservations = []; // This can be empty

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Reservations'),
        backgroundColor: Colors.blue,
      ),
      body: reservations.isEmpty
          ? Center(
              child: Text('No reservations yet!'),
            )
          : ListView.builder(
              itemCount: reservations.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(reservations[index]),
                );
              },
            ),
    );
  }
}