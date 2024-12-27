import 'package:flutter/material.dart';

class BusReservation extends StatelessWidget {
  const BusReservation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Bus Reservation"),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: const Text("Bus Reservation Page"),
      ),
    );
  }
}