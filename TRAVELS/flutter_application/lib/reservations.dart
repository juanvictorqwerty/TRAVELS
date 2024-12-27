import 'package:flutter/material.dart';

class Reservations extends StatefulWidget {
  const Reservations({Key? key}) : super(key: key);

  @override
  State<Reservations> createState() => _ReservationsState();
}

class _ReservationsState extends State<Reservations> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Reservations'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Text('No reservations yet!'),
      ),
    );
  }
}