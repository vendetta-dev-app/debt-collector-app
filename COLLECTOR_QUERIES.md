# Queries y Mutations para Cobradores

Este documento describe todas las queries y mutations disponibles para la aplicación de cobradores.

## 📋 Resumen

- **5 Queries de Préstamos**
- **2 Queries de Rutas** (la ruta del collector se obtiene vía `me.collectorProfile.route`)
- **1 Query de Transacciones**
- **2 Mutations de Pagos**
- **2 Mutations de Clientes**

---

## 💰 Queries de Préstamos (Loans)

### 1. `LoansByCollectorQuery`
**Ubicación**: `src/modules/loans/queries/LoansByCollectorQuery.ts`

**Propósito**: Obtener todos los préstamos asignados a un cobrador.

**Uso**:
```typescript
import { LoansByCollectorQuery } from '@loans/queries'

const { data, loading, error } = useQuery(LoansByCollectorQuery, {
  variables: {
    collectorId: 'collector-id-123', // Opcional, usa el del usuario autenticado
    first: 20,
    after: cursor // Para paginación
  }
})
```

**Campos que devuelve**:
- Información del préstamo (monto, tasa de interés, cuotas, etc.)
- Estado del préstamo (aprobado, vencido, pagado, etc.)
- Cliente asociado (nombre, alias, dirección)
- Ruta asociada

---

### 2. `LoansByRouteQuery`
**Ubicación**: `src/modules/loans/queries/LoansByRouteQuery.ts`

**Propósito**: Obtener todos los préstamos de una ruta específica.

**Uso**:
```typescript
import { LoansByRouteQuery } from '@loans/queries'

const { data } = useQuery(LoansByRouteQuery, {
  variables: {
    routeId: 'route-id-123',
    first: 20
  }
})
```

---

### 3. `LoansByClientQuery`
**Ubicación**: `src/modules/loans/queries/LoansByClientQuery.ts`

**Propósito**: Ver el historial de préstamos de un cliente específico.

**Uso**:
```typescript
import { LoansByClientQuery } from '@loans/queries'

const { data } = useQuery(LoansByClientQuery, {
  variables: {
    clientId: 'client-id-123'
  }
})
```

**Incluye**: Pagos asociados a cada préstamo

---

### 4. `PaymentsByLoanQuery`
**Ubicación**: `src/modules/loans/queries/PaymentsByLoanQuery.ts`

**Propósito**: Ver todos los pagos de un préstamo específico.

**Uso**:
```typescript
import { PaymentsByLoanQuery } from '@loans/queries'

const { data } = useQuery(PaymentsByLoanQuery, {
  variables: {
    loanId: 'loan-id-123'
  }
})
```

---

### 5. `OverdueLoansQuery`
**Ubicación**: `src/modules/loans/queries/OverdueLoansQuery.ts`

**Propósito**: Obtener préstamos vencidos (para cobranza prioritaria).

**Uso**:
```typescript
import { OverdueLoansQuery } from '@loans/queries'

const { data } = useQuery(OverdueLoansQuery, {
  variables: {
    first: 50
  }
})
```

**Información clave**:
- Días de vencimiento
- Información de contacto del cliente
- Dirección para cobranza

---

## 🗺️ Queries de Rutas (Routes)

### NOTA IMPORTANTE: Ruta del Collector
La ruta del cobrador se obtiene automáticamente vía `me.collectorProfile.route` en la query `Me` que se ejecuta al iniciar la app. **No hay necesidad de una query `RoutesByCollectorQuery`** porque es una relación 1:1 (un collector tiene una sola ruta o ninguna).

**Uso**:
```typescript
import useMe from '@auth/hooks/useMe'

const HomePage = () => {
  const me = useMe()
  const route = me?.collectorProfile?.route || null

  if (!route) {
    return <NoRouteState />  // "No tienes ruta asignada"
  }

  return <RouteInfoCard route={route} />
}
```

---

### 1. `RouteDetailQuery`
**Ubicación**: `src/modules/routes/queries/RouteDetailQuery.ts`

**Propósito**: Ver detalles completos de una ruta específica.

**Uso**:
```typescript
import { RouteDetailQuery } from '@routes/queries'

const { data } = useQuery(RouteDetailQuery, {
  variables: {
    id: 'route-id-123'
  }
})
```

**Incluye**:
- Balance inicial y actual
- Administrator y manager asignados
- Historial de transacciones
- Estadísticas de préstamos

---

### 3. `TransactionsByRouteIdQuery`
**Ubicación**: Ya existente en `src/modules/transactions/queries/TransactionsQuery.ts`

**Propósito**: Ver transacciones de una ruta.

---

## 💸 Mutations de Pagos

### 1. `CreatePaymentMutation`
**Ubicación**: `src/modules/loans/mutations/CreatePaymentMutation.ts`

**Propósito**: Registrar un pago de un préstamo.

**Uso**:
```typescript
import { CreatePaymentMutation } from '@loans/mutations'

const [createPayment] = useMutation(CreatePaymentMutation, {
  onCompleted: (data) => {
    console.log('Pago registrado:', data.createPayment.payment)
  }
})

createPayment({
  variables: {
    input: {
      loanId: 'loan-id-123',
      amount: 150.00,
      paymentDate: '2026-02-22',
      paymentMethod: 'CASH', // CASH | TRANSFER | OTHER
      notes: 'Pago semanal'
    }
  }
})
```

**Actualiza**: `totalPaid`, `pendingBalance`, `isFullyPaid`, `status` del préstamo

---

## 👥 Mutations de Clientes

### 1. `CreateClientMutation`
**Ubicación**: `src/modules/clients/mutations/CreateClientMutation.ts`

**Propósito**: Crear un nuevo cliente.

**Uso**:
```typescript
import { CreateClientMutation } from '@clients/mutations'

const [createClient] = useMutation(CreateClientMutation)

createClient({
  variables: {
    input: {
      email: 'cliente@email.com',
      fullName: 'Juan Pérez',
      phoneNumber1: '3001234567',
      phoneNumber2: '3007654321',
      collectorId: 'collector-id-123',
      password: 'password123',
      alias: 'Juan',
      identityDocument: '12345678',
      addressLine1: 'Calle 123 #45-67',
      addressLine2: 'Apto 101',
      neighborhood: 'Barrio Centro'
    }
  }
})
```

---

### 2. `UpdateClientMutation`
**Ubicación**: `src/modules/clients/mutations/UpdateClientMutation.ts`

**Propósito**: Actualizar información de un cliente.

**Uso**:
```typescript
import { UpdateClientMutation } from '@clients/mutations'

const [updateClient] = useMutation(UpdateClientMutation)

updateClient({
  variables: {
    input: {
      id: 'client-id-123',
      email: 'nuevo@email.com',
      fullName: 'Juan Pérez Pérez',
      phoneNumber1: '3009999999',
      alias: 'Juancho'
    }
  }
})
```

---

## 🗑️ Queries que DEBEN Eliminarse (Solo Admin)

Las siguientes queries están orientadas a administradores y NO deben usarse en la app de cobradores:

- ❌ `ClientsByAdminQuery` → Usar clientes obtenidos de préstamos del cobrador
- ❌ `CollectorsByAdminQuery` → El cobrador no ve otros cobradores
- ❌ `ManagersByAdminQuery` → El cobrador no ve managers
- ❌ `RoutesByAdminQuery` → Usar `RoutesByCollectorQuery`

---

## 📝 Notas Importantes

1. **Paginación**: Todas las queries usan paginación tipo Relay (cursor-based con `first`/`after`)

2. **Autenticación**: Actualmente las queries no filtran automáticamente por el usuario autenticado. Debes pasar el `collectorId` del usuario logueado.

3. **Permisos**: Asegúrate de que el backend valide que el cobrador solo pueda ver sus propios datos.

4. **Optimización**: Los campos solicitados están optimizados para la UI de cobradores.

---

## 🚀 Próximos Pasos Sugeridos

1. Crear hooks personalizados para cada query/mutation
2. Implementar caché de Apollo para optimizar cargas
3. Agregar queries de filtrado y búsqueda
4. Implementar suscripciones para actualizaciones en tiempo real
