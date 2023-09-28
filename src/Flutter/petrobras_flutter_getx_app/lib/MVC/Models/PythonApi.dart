import 'dart:async';

import 'package:python_shell/python_shell.dart';

class PythonAPI {
  final PythonShell _shell;

  PythonAPI() : _shell = PythonShell(PythonShellConfig());

  Future<void> initialize() async {
    await _shell.initialize();
  }

  Future<void> getPythonVersion() async {
    await executeCode(
        "import your_python_script as script; script.get_python_version()");
  }

  Future<void> getCurrentDirectory() async {
    await executeCode(
        "import your_python_script as script; script.get_current_directory()");
  }

  Future<void> getHelloMessage() async {
    await executeCode(
        "import your_python_script as script; script.get_hello_message()");
  }

  Future<void> runCodeString(String code) async {
    var instance = ShellManager.getInstance("default");
    var result = await instance.runString(code, echo: true);
    return result; // Aqui, estamos retornando uma string.
  }

  Future<void> executeCode(String code) async {
    var instance = ShellManager.getInstance("default");
    await instance.runString(code, echo: true);
  }
}
