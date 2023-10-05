import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DataInfoPage extends StatefulWidget {
  @override
  _DataInfoPageState createState() => _DataInfoPageState();
}

class _DataInfoPageState extends State<DataInfoPage> {
  String info = '';
  String description = '';

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    final response = await http.get('http://127.0.0.1:5000/data_info' as Uri);
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setState(() {
        info = data['info'];
        description = data['description'];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Data Information'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Info:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            Text(info),
            SizedBox(height: 20),
            Text(
              'Description:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            Text(description),
          ],
        ),
      ),
    );
  }
}
