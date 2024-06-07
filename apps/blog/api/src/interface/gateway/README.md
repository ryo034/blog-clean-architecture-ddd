# Gateway

## 一言で説明
Repositoryの実装。

## 概要
主にDriverをDIします。
Driverから受け取った値をEntityに変換して返します。
変換処理をAdapterなどに分離するとテストしやすいです。

## APIにおける簡単な流れ
1. Repositoryの実装
