import * as vscode from 'vscode';

let interval: ReturnType<typeof setInterval> | undefined;

export function activate(context: vscode.ExtensionContext) {

  console.log('Salaty is active');

  const disposable = vscode.commands.registerCommand(
    'salaty.start',
    () => {

      vscode.window.showInformationMessage(
        'Salaty reminder started'
      );

      interval = setInterval(() => {

        const now = new Date();

        const time =
          now.getHours().toString().padStart(2, '0') +
          ':' +
          now.getMinutes().toString().padStart(2, '0');

        console.log('checking time:', time);

        // test notification كل دقيقة
        vscode.window.showInformationMessage(
          `⏰ Checking time: ${time}`
        );

      }, 60 * 1000);

    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  if (interval) clearInterval(interval);
}