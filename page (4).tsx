export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Админ-панель</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm text-gray-500">Пользователи</p>
          <p className="text-3xl font-bold mt-1">—</p>
        </div>
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm text-gray-500">Пригласительные</p>
          <p className="text-3xl font-bold mt-1">—</p>
        </div>
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm text-gray-500">Оплаты за месяц</p>
          <p className="text-3xl font-bold mt-1">— ₸</p>
        </div>
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm text-gray-500">Активные Premium</p>
          <p className="text-3xl font-bold mt-1">—</p>
        </div>
      </div>
    </div>
  );
}
